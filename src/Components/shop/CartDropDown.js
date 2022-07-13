import styled from 'styled-components';


export default function CartDropDown() {


    return (
        <Container>
            <Div>
                <button>go to checkout</button>
            </Div>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

const Div = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

// .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }