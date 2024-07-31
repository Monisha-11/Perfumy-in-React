import img1 from "../assets/images/img 1.jpg"
import img2 from "../assets/images/img 2.jpg"
import img3 from "../assets/images/img 3.webp"

function Images()
{
    return(
        <div className="img">
        <div className="img__s1">
            <img src={img1} alt="img1"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum enim adipisci ipsum molestiae cumque odit 
                .</p>
        </div>
        <div className="img__s2">
            <img src={img2} alt="img1"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum enim adipisci ipsum molestiae cumque odit 
                .</p>
        </div>
        <div className="img__s3">
            <img src={img3} alt="img1"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum enim adipisci ipsum molestiae cumque odit 
                .</p>
        </div>
    </div>
    )
}

export default Images