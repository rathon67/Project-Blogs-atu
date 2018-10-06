import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Cookies from 'universal-cookie';
import axios from 'axios';

// const cookies = new Cookies();

class Dashboard extends Component 
{
    state={
        CountProduk:'',
        CounInv:'',
        CountFailedPaid:'',
        CountUser:''
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/getdataCountProduct`)
        .then((terimaData)=>{
            console.log(terimaData)
            this.setState({
                CountProduk:terimaData.data[0].TotalJumlahProduct
            });
        })

        axios.get(`http://localhost:8000/getdataCountInvoice`)
        .then((terimaData)=>{
            this.setState({
                countInv:terimaData.data[0].TotalJumlahInvoice
            })
        })
        axios.get(`http://localhost:8000/getdataCountFailedPayment`)
        .then((terimaData)=>{
            this.setState({
                CountFailedPaid:terimaData.data[0].TotalJumlahFailedCheckout
            })
        })
        
        axios.get(`http://localhost:8000/getdataCountUserCostumer`)
        .then((terimaData)=>{
            this.setState({
                CountUser:terimaData.data[0].TotalJumlahUser
            })
        })
    }
    
    render() 
    {
        //Cookies login
        // if (cookies.get('adminID') === undefined)
        // {
        //     return <Redirect to='/'/>
        // }
        //akhir cookies login

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
                                            <Link to="./Dashboard" className="navbar-brand" >Dashboard</Link>
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
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="card">
                                                    <div className="content">
                                                        <div className="row">
                                                            <div className="col-xs-5">
                                                                <div className="icon-big icon-warning text-center">
                                                                    <i className="ti-server" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-7">
                                                                <div className="numbers">
                                                                    <p>Data Motors and Scooters</p>{this.state.CountProduk}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="footer"><hr />
                                                            <div className="stats">
                                                            <i className="ti-reload" /> Updated now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6">
                                                <div className="card">
                                                    <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                        <div className="icon-big icon-success text-center">
                                                            <i className="ti-wallet" />
                                                        </div>
                                                        </div>
                                                        <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Total Transaction</p>
                                                            {this.state.countInv}
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-calendar" /> Last day
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                <div className="card">
                                                    <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                        <div className="icon-big icon-danger text-center">
                                                            <i className="ti-pulse" />
                                                        </div>
                                                        </div>
                                                        <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Failed Payment</p>
                                                            {this.state.CountFailedPaid}
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-timer" /> In the last hour
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                <div className="card">
                                                    <div className="content">
                                                    <div className="row">
                                                        <div className="col-xs-5">
                                                        <div className="icon-big icon-info text-center">
                                                            <i className="ti-face-smile" />
                                                        </div>
                                                        </div>
                                                        <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Total Users Members</p>
                                                            +{this.state.CountUser}
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-reload" /> Updated now
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                <div className="card">
                                                    <div className="header">
                                                    <h4 className="title">Users Behavior</h4>
                                                    <p className="category">24 Hours performance</p>
                                                    </div>
                                                    <div className="content">
                                                    <div id="chartHours" className="ct-chart" />
                                                    <div className="footer">
                                                        <div className="chart-legend">
                                                        <i className="fa fa-circle text-info" /> Open
                                                        <i className="fa fa-circle text-danger" /> Click
                                                        <i className="fa fa-circle text-warning" /> Click Second Time
                                                        </div>
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-reload" /> Updated 3 minutes ago
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                <div className="card">
                                                    <div className="header">
                                                    <h4 className="title">Email Statistics</h4>
                                                    <p className="category">Last Campaign Performance</p>
                                                    </div>
                                                    <div className="content">
                                                    <div id="chartPreferences" className="ct-chart ct-perfect-fourth" />
                                                    <div className="footer">
                                                        <div className="chart-legend">
                                                        <i className="fa fa-circle text-info" /> Open
                                                        <i className="fa fa-circle text-danger" /> Bounce
                                                        <i className="fa fa-circle text-warning" /> Unsubscribe
                                                        </div>
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-timer" /> Campaign sent 2 days ago
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="card ">
                                                    <div className="header">
                                                    <h4 className="title">2015 Sales</h4>
                                                    <p className="category">All products including Taxes</p>
                                                    </div>
                                                    <div className="content">
                                                    <div id="chartActivity" className="ct-chart" />
                                                    <div className="footer">
                                                        <div className="chart-legend">
                                                        <i className="fa fa-circle text-info" /> Tesla Model S
                                                        <i className="fa fa-circle text-warning" /> BMW 5 Series
                                                        </div>
                                                        <hr />
                                                        <div className="stats">
                                                        <i className="ti-check" /> Data information certified
                                                        </div>
                                                    </div>
                                                    </div>
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
export default Dashboard;