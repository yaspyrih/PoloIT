import React, { useState } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';

function CustomCard({ img, company, description, service, category, web, linkedin, email }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card maxW='sm' boxShadow='2xl' mb='4' className="animated-card">
        <CardBody>
          <Image src={img} alt={company} borderRadius='lg' maxH='200px' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{company}</Heading>
            <Text>{description}</Text>
            <Text color='blue.600' fontSize='l'>{service} {category}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            {/* Use onClick to open the modal */}
            <Button onClick={openModal} variant='solid' colorScheme='blue'>
              Contacto
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* Render the Modal component conditionally */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comuníquese con {company}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your contact information here */}
            
            <input type='text' placeholder="Nombre y apellido"></input>
            <input type='text' placeholder="Mensaje"></input>
            <input type="submit" value="Enviar"></input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomCard;
