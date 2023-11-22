import { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import fetchPet from '../services/api_requests/fetchPets'

import Carousel from './Carousel'
import Modal from './Modal'

import AdoptedPetContext from '../AdoptedPetContext'

const Details = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const [_, setAdoptedPet] = useContext(AdoptedPetContext)
  const { id } = useParams()
  const { isPending, error, data } = useQuery({
    queryKey: ['details', id],
    queryFn: fetchPet,
  })
  const pet = data?.pets[0]
  if (isPending) {
    return (
      <div className="loading-pane">
        <h2 className="loader">loading..</h2>
      </div>
    )
  }
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <Carousel images={pet.images} />
        <h2>
          {pet.animal}-{pet.breed}-{pet.city},{pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet)
                  navigate('/')
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default Details
