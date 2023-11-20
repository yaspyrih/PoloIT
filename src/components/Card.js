import { Card, CardBody, Image, Stack, Heading, Text,  CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

function CustomCard({ img, company, description, service, category, web, linkedin, email }) {
  return (
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
          <Button as='a' href={web} variant='solid' colorScheme='blue'>Contacto</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
