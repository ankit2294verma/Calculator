import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import User from './User';
import APIdata from './APIdata';

// test('testing app component',()=>{
//     render(<App/>)
//     let increment = screen.getByText(/Increment/)
//     expect(increment).toBeInTheDocument()
// })
// test('testing app component',()=>{
//     render(<App/>)
//     let decrement = screen.getByText(/Decrement/)
//     expect(decrement).toBeInTheDocument()
// })
// test("input testing box",()=>{
//     render(<App/>)
//     const checkInput = screen.getByRole("textbox");
//     const placeholder = screen.getByPlaceholderText("Enter FullName")
//     const title = screen.getByTitle("Please Enter Fullname")

//     expect(checkInput).toBeInTheDocument()
//     expect(placeholder).toBeInTheDocument()
//     expect(title).toBeInTheDocument()
//     expect(checkInput).toHaveAttribute("name","fullname")
//     expect(checkInput).toHaveAttribute("id","fullname")
//     expect(checkInput).toHaveAttribute("placeholder","Enter FullName")
// })
// test("input onchange event testing",()=>{
//     render(<App/>)
//     const input = screen.getByRole("textbox");
//     fireEvent.change(input,{target:{value:'Ankit'}})
//     expect(input.value).toBe("Ankittext")
// })
// test("on click event Teting",()=>{
//     render(<App/>)
//     const btn = screen.getByRole("button",{name:'Update Text'});
//     expect(btn).toBeInTheDocument()
//     fireEvent.click(btn);
//     expect(screen.getByText("Button Clicked")).toBeInTheDocument();
// })
// test(" testing get state data ",()=>{
//     render(<App/>);
//     let statedata = screen;
//     console.log(statedata)
// })
// test(" Create snapshot testing",()=>{
//     const container = render(<App />)
//     expect(container).toMatchSnapshot(); 
// })

// test('increments counter value on button click', () => {
//   // Arrange
//   const initialCounterValue = 0;
//   render(<User/>);

//   // Act
//   const incrementButton = screen.getByText('Increment');
//   fireEvent.click(incrementButton);
//   fireEvent.click(incrementButton);

//   // Assert
//   const updatedCounterValue = screen.getByTestId('counterdata').textContent;
//   expect(updatedCounterValue).toBe("2")
// });

// test("function mockup",()=>{
//     const handleIncrement = jest.fn();
//     const handleDecrement = jest.fn();
//     render(<User counter={0} Increment={handleIncrement} Decrement={handleDecrement}/>)
//     const btn1 = screen.getByText('Increment')
//     const btn2 = screen.getByText('Decrement')
//     expect(btn1).toBeInTheDocument();
//     expect(btn2).toBeInTheDocument();
//     fireEvent.click(btn1);
//     fireEvent.click(btn1);
//     fireEvent.click(btn2);
//     expect(handleIncrement).toHaveBeenCalledTimes(2)
//     expect(handleDecrement).toHaveBeenCalledTimes(1)
// })

test('msw testing',async ()=>{
    render(<APIdata />);
    await waitFor(()=>{
        screen.debug()
    })
})