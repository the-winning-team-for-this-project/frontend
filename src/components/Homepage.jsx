import { Container } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'

const Homepage = () => {
    return (
        <Container className='homecontainer'>
        <Jumbotron fluid className='jumone'>
  <Container>
  <h1><strong>Search for Person Information</strong></h1>
        <br />
        <h3>
                Direct to search using the Navigation Bar at the top of this page. 
            <br />
            <br />
            Input known information.
            <br />
            <br />
            You will then be redirected to a page containing further information on that person.
            
        </h3>
  </Container>
</Jumbotron>
        <Jumbotron fluid className='jumtwo'>
  <Container>
    <h1>Hello World</h1>
    <p>
      Some things and words and things in here.
    </p>
  </Container>
</Jumbotron>
<Jumbotron fluid className='jumthree'>
  <Container>
    <h1>Hello World</h1>
    <p>
      More words here.
    </p>
  </Container>
</Jumbotron>
        </Container>
        
        
    )
}

export default Homepage