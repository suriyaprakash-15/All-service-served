import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Dashboard.css';
// import grocery from '../../../public/Images/grocery.jpg';

function GroupExample() {
  return (
    <div>
      <CardGroup className='cardss'>
        <table className='table-1' style={{marginLeft:'1cm',}}>
          <tr>
          <td>
            <button>
        <Card style={{color:"red",height:'150px',width:'350px',}} className='row1-1'>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Img style={{height:'150px',width:'350px'}} variant="top"  src="/Images/grocery.jpg" alt="Grocery Image" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </button>
        </td>
        
        <td>
          <button>
        <Card className='row1-2'  style={{height:'150px',width:'350px',}}>
          <Card.Img style={{height:'150px',width:'350px'}} variant="top" src="/Images/medical-store.png" alt="medical-store Image" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </button>
        </td>
        <td>
          <button>
        <Card className='1-3'  style={{color:"red",height:'150px',width:'350px',}}>
          <Card.Img style={{height:'150px',width:'350px'}} variant="top" src="/Images/pipes.webp"alt="pipes  Image" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </button>
        </td>
        </tr>
        </table>
      </CardGroup>
      </div>
  );
}

export default GroupExample;