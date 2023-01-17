import { 
  Container, 
  Form, 
  AddButton, 
  ImageUpload,  
} from './styles';

//api conn
import { api } from '../../services/api'

//Hooks
import { useEffect, useState } from 'react';

//Components
import { Footer } from '../../components/Footer'
import { TextArea } from '../../components/TextArea'
import { TextInput } from '../../components/TextInput'
import { MoneyInput } from '../../components/MoneyInput'
import { TagIngredients } from '../../components/TagIngredients'
import { NewProductHeader } from '../../components/NewProductHeader';

//Icons
import { FiUpload, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineChevronLeft } from 'react-icons/hi'

export function NewProduct() {
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [imageFile, setImageFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('');
  


  async function handleImageUpload(event) {
    event.preventDefault()

    const file = event.target.files[0];
    setImageFile(file);
  }

  function handleIngredients(data) {
    setIngredients(data)
  }

  function handlePrice(data) {

    const priceWithDotSeparator = data.replace(",", ".")
    const priceAsFloatNumber = parseFloat(priceWithDotSeparator);

    setValue(priceAsFloatNumber);
  }

  async function handleAddNewProduct() {

    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imageFile)
      
    //DiskStorage (saving image)
    const response_image = await api.post('/products/image', fileUploadForm);
    const dataImageName = response_image.data;

    const productData = {
      name, 
      description,
      price: value, 
      image: dataImageName
    };

    //Inserting product on DB
    const response_product = await api.post('/products', productData);

    const product_id = response_product.data;

    //Inserting ingredients on DB
    await api.post('/ingredients', { product_id, ingredients });

    alert('Produto criado com sucesso');
    
    refreshPage();
    
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Container>
      <NewProductHeader />
        <Form>
          <div className='back-link'>
            <HiOutlineChevronLeft />
            <span>voltar</span>
          </div>

          <p className='title'>Editar prato</p>

          <ImageUpload>
            <span>Imagem do prato</span>

            <label htmlFor="image">
              <input 
                id='image'
                type='file'
                accept='image/*'
                onChange={ handleImageUpload }
              />
                {
                  imageFile ? <FiCheckCircle /> : <FiUpload />
                }

                Selecione imagem
            </label>
          </ImageUpload>

          <div className='name-input'>
            <TextInput 
              caption='Nome'
              value={ name }
              placeholder='Ex.: Salada ceaser'
              onChange={ e => setName(e.target.value)}
            />
          </div>

          <div className="tags">
            <span>Ingredientes</span>
            <TagIngredients 
              sendData={ handleIngredients }
            />
          </div>

          <div className="price">
            <MoneyInput 
              prefix='R$'
              caption='Preço'
              sendData={ handlePrice }
            />
          </div>

          <div className="description">
            <span>Descrição</span>
            <TextArea 
              value={ description }
              onChange={ e => setDescription(e.target.value)}
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            />
          </div>

          <div className="add-button">
            <AddButton
              type='button'
              onClick={ handleAddNewProduct }
            >
              Adicionar pedido
            </AddButton>
          </div>

        </Form>
      <Footer />
    </Container>
  )
}