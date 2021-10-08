import React  from "react"
import  ReactDOM  from "react-dom"
import {BrowserRouter} from 'react-router-dom'
import Routess from "./Routess"

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Routess/>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
    )
