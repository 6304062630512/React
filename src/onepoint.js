import { useState } from "react"
import { Button, Container, Form, Table} from "react-bootstrap";
import { evaluate } from 'mathjs'
import Bootnav from "./navbar";
import Plot from "react-plotly.js";

const OnePoint = () => {
    const print = () => {
        console.log(data)
        setI(data.map((x)=>x.iteration));
        setValuex1(data.map((x)=>x.x1));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="50%">Iteration</th>
                            <th width="50%">Xi+1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.x1}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table> 
                
                <Plot style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}
                    data = {datachart}
                    layout={{
                    width: 1000, height: 600,
                    title: "One-Point Iteration Chart",
                    }}
                />
            </Container>      
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    const CalOnePoint = (X0) => {
        var x0,x1,scopex0,er;
        var step = 0;
        var stepMax = 100;
        var obj={};
        var objChart = {};
        var objChart1 = {}
        var x = [];
        var y = [];
        var X1= [];
        var y1= [];
        x0 = X0;
        do
        {
            scopex0 = {
                x:x0,
            }
            x1 = evaluate(Equation , scopex0);
            console.log(x1);
            step++;
            console.log(step);
            if(step>stepMax){
                break;
            }
            obj = {
                iteration:step,
                x1:x1,
            }
            er = error(x0,x1)
            x0 = x1;
            x.push(step)
            y.push(x1)
            X1.push(step)
            y1.push(er)
            data.push(obj)
        }
        while(er>0.000001)
        objChart = {
            x:x,
            y:y,
            name: "Iteration/Error",
            mode: "markers+lines",
            type: "scatter",
            marker: {color: 'purple'}
        }
        objChart1 = {
            x:X1,
            y:y1,
            name: "Iteration/Error",
            mode: "markers+lines",
            type: "scatter",
            marker: {color: 'brown'}
        }
        datachart.push(objChart)
        datachart.push(objChart1)
        console.log("data");
        console.log(datachart);
        setX1(x1)
    }

    const data =[];
    const datachart = [];
    const [valuex1, setValuex1] = useState([]);
    const [valueI, setI] = useState([]);
     
   
    const [popupdata, setpopupdata] = useState([]);
    const [open, setOpen] = useState(false);
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("((2x + 5)/2)^(1/3)")
    const [X1,setX1] = useState(0)
    const [X0,setX0] = useState(0)

    const handleClose = () => {
        setOpen(false);
    };

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }


    const calculateRoot = () =>{
        const x0num = parseFloat(X0)
        CalOnePoint(x0num);
     
        setHtml(print());
           
        console.log(valueI)
        console.log(valuex1)
        
    }

    return (
            <Container>
                <br/><br/><br/>
                <Bootnav/>

                <h1 style={{textAlign:"center" ,padding:"20px"}}>One-Point Iteration Methods</h1>
                <Form >
                    <Form.Group className="mb-3" style={{textAlign:"center"}}>
                        <Form.Label>Input Rewrite f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"auto"}} className="form-control"></input>
                        <br></br>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="X0" onChange={inputX0} style={{width:"20%", margin:"auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: 'auto', display: 'block' }} onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>

                <br></br>
                <h5>Answer = {X1.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
         
    )
}

export default OnePoint