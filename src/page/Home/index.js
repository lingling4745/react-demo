import React,{Component} from 'react'
import {Carousel} from 'antd'
import {titleList} from '@config/index.js'
import "./style.less"
import { Row, Col } from 'antd';
import CardItem from '@components/card/card'
import {getBanner,cardList} from '@api/api.js'


export default class Home extends Component{
    constructor(props,context) {
        super(props)
        this.state = {
            appliancesList:[
                {
                    id:0,
                    title:'现代简约'
                },
                {
                    id:1,
                    title:'风情北欧'
                },
                {
                    id:2,
                    title:'典雅新中式'
                },
                {
                    id:3,
                    title:'品质轻奢'
                },
            ],
            banner:[],
            carAllList:[]
        }
    }
    componentDidMount(){
        this.init();
    }
    cardWay(){
        return this.state.carAllList.map(val =>{
            let {name,saleQuantity,mainImage,id} = val;
            let value = {name,saleQuantity,mainImage};
            return(
                <CardItem {...value} key={id}></CardItem>
            )
        })
    }

    init(){
        getBanner().then(res =>{
            if(res){
                this.setState({
                    banner:res
                })
            }
        });
        cardList().then(res =>{
            if(res){
                this.setState({
                    carAllList:res
                })
            }
        })
    }
    render() {
        return (
            <main className="index-main">
               <Carousel autoplay>
                   {
                       this.state.banner.map(val => 
                       <div className="car-img" key={val.id}>
                           <img src={val.url}></img>
                       </div>
                       )
                   }
               </Carousel>
               <section className='list-content'>
                   <p className='title-tips'>海信官网</p>
                   <div className='list-content-item'>
                       <a title='海信官方商城-权威官网 汇聚精品' href="#">
                           <div className='set-list-big'>
                               <img src={titleList[0].url} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                               <img src={titleList[0].hoverUrl} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                           </div>
                       </a>
                       <a title='海信官方商城-权威官网 汇聚精品'  href="#">
                           <div className='set-list-middle'>
                               <img src={titleList[1].url} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                               <img src={titleList[1].hoverUrl} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                           </div>
                       </a>
                       <div className='set-list-right'>
                           <a title='海信官方商城-权威官网 汇聚精品'  href="#">
                               <div className='set-list-small'>
                                   <img src={titleList[2].url} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                                   <img src={titleList[2].hoverUrl} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                               </div>
                           </a>
                           <a title='海信官方商城-权威官网 汇聚精品'  href="#">
                           <div className='set-list-small mgt20'>
                               <img src={titleList[3].url} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                               <img src={titleList[3].hoverUrl} className="hover-img" alt='海信官方商城-权威官网 汇聚精品'></img>
                           </div>
                       </a>
                       </div>
                   </div>
               </section>
       
               <section className='list-content'>
                   <p className='title-tips'>璀璨·成套家电专区</p>
                   <div>
                       <Row>
                           {
                               this.state.appliancesList.map((val,index) =><Col key={index}>{val.title}</Col>)
                           }
                       </Row>
                       <img src="https://img.shop.hisense.com/2020/11/05/6d02e510-dd01-4229-9142-68e536556572.jpg"></img>
                   </div>
               </section>
               <section className="list-item">
                   {
                       this.cardWay()
                   }
               </section>
            </main>
        )
    }
}