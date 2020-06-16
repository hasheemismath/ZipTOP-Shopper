import React, { Component } from 'react';
 // import Lightbox from 'react-images';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImageLightBox extends Component {

    state = {
        lightboxIsOpen: true,
        currentImage: this.props.pos,
        images:[]
    }

    static getDerivedStateFromProps(props){
        if(props.images){

            const images = [];
            props.images.forEach(element=>{
                images.push({src:`${element}`})
            });
            return {
                images : images
            }
        }
         return false

    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage -1
        })
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage +1
        })
    }

    closeLightbox = () => {
        this.props.onclose();
    }

    render() {

        const {currentImage,images} = this.state

        return (
                <Lightbox
                     mainSrc={images[currentImage].src}
                     nextSrc={images[(currentImage ) % images.length+1 ]}
                     prevSrc={images[(currentImage ) % images.length-1]}
                     onCloseRequest={()=>this.closeLightbox()}
                     onMovePrevRequest={()=> this.gotoPrevious() }
                     onMoveNextRequest={()=> this.gotoNext()}
                />
        );
    }
}

export default ImageLightBox;