import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Tambahcategory extends Component {
    tambahData = (e) => {
        axios.post(`http://localhost:8000/tambahdataCat`,{
            inputSatu: e.namakategori.value,
            
        })
    }

    render(){
        return (
                    <div>
                        <div className="wrapper">
                            <Header/>
                            <div className="main-panel">
                                <nav className="navbar navbar-default">
                                            <div className="container-fluid">
                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle">
                                                        <span className="sr-only">Toggle navigation</span>
                                                        <span className="icon-bar bar1" />
                                                        <span className="icon-bar bar2" />
                                                        <span className="icon-bar bar3" />
                                                    </button>
                                                    <Link to="#" className="navbar-brand">Dashboard</Link>
                                                </div>
                                                <div className="collapse navbar-collapse">
                                                    <ul className="nav navbar-nav navbar-right">
                                                        <li>
                                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                                <i className="ti-panel" />
                                                                <p>Stats</p>
                                                            </Link>
                                                        </li>
                                                        <li className="dropdown">
                                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                                <i className="ti-bell" />
                                                                <p className="notification">5</p>
                                                                <p>Notifications</p>
                                                                <b className="caret" />
                                                            </Link>
                                                            <ul className="dropdown-menu">
                                                                <li><Link to="#">Notification 1</Link></li>
                                                                <li><Link to="#">Notification 2</Link></li>
                                                                <li><Link to="#">Notification 3</Link></li>
                                                                <li><Link to="#">Notification 4</Link></li>
                                                                <li><Link to="#">Another notification</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                        <Link to="/logout">
                                                                <i className="ti-hand-point-right" />
                                                                <p>Logout</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="headercos">
                                                    <h3 className="title ">Tambah Data Category</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                                                        <fieldset> 
                                                            <input type="hidden" className="form-control" ref="idproduk" />
                                                            
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Nama Category</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="namakategori" type="text" className="form-control" placeholder="Input Category baru"/>
                                                                </div>
                                                            </div>                                                          
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
                                                                    {/* <button type="button" onClick={() => this.updateData(this.refs)} clas sName="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                                                                </div>
                                                            </div>
                                                        </fieldset>   
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                );
    }
}
export default Tambahcategory;