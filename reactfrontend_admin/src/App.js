import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import User from './component/User';
import Invoice from './component/Invoice';
import Listcategory from './component/Listcategory';
import ListBlog from './component/ListBlog';
import Listmember from './component/Listmember';
import Tambahcategory from './component/Tambahcategory';
import Editproduct from './component/Editproduct';
import Logout from './component/Logout';
import Jumbotron from './component/Jumbotron';
import Carousel from './component/Carousel';
import detailpembayaran from './component/Detailpembayaran';
import Invoicedetail from './component/Invoicedetail';
import AddBlogs from './component/AddBlogs';
import Newsletter from './component/Newsletter';

class App extends Component 
{
    render() 
    {
        return (
                    <div>                        
                        <Route exact path="/" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/User" component={User}/>                      
                        <Route path="/Dashboard" component={Dashboard}/>
                        <Route path="/listcategory" component={Listcategory}/>                        
                        <Route path="/editdata" component={Editproduct}/>
                        <Route path="/listmember" component={Listmember}/>
                        <Route path="/tambahcategory" component={Tambahcategory}/>
                        <Route path="/listblog" component={ListBlog}/>
                        <Route path="/addblogs" component={AddBlogs}/>      
                        <Route path="/jumbodisplay" component={Jumbotron}/>
                        <Route path="/carouseldisplay" component={Carousel}/>
                        <Route path="/newsletter" component={Newsletter}/>
                        <Route path="/detailpembayaran" component={detailpembayaran}/>
                        <Route path="/Invoice" component={Invoice}/>
                        <Route path="/Invoicedetail" component={Invoicedetail}/>                        
                    </div>
                );
    }
}
export default App;