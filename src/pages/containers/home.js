import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Realated from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from './../../widgets/components/modal'
import HandleError from '../../errors/containers/handle-error'

class Home extends Component {
  state = {
    modalVisible: false,

  }
  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }
  handleModalClick = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render () {
   return (
     <HandleError>
       <HomeLayout>
         <Realated/>
         <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
         {
           this.state.modalVisible &&
           <ModalContainer>
             <Modal
               handleModalClick={this.handleModalClick}
             />
           </ModalContainer>
         }

       </HomeLayout>
     </HandleError>
   )
  }
}

export default Home