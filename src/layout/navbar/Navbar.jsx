import "./navbar.scss";

const Navbar = () => {
  function thyg() {

    var btn_tog = document.querySelector("#tog").checked;
    var main = document.querySelector("#content");

    if (btn_tog === true) {
      
        btn_tog = true;
        document.querySelector("#togle").style.display = "none";
        document.querySelector("#content").style.marginLeft = "0px";
        document.querySelector(".header").style.marginLeft = "0px";


    } else {
        btn_tog = false;
        document.querySelector("#togle").style.display = "block";
        document.querySelector("#content").style.marginLeft = "230px";
        document.querySelector(".header").style.marginLeft = "230px";
    }



}
  return (
    <div className='navbar'>
    <div className="cob" style={{display:'flex', alignItems:'center'}}>
        <input type="checkbox" hidden id="tog" />
        <label htmlFor="tog" onClick={thyg} className='togle'><i className="fas fa-bars text-primary" style={{ fontSize: 20 }}></i></label>


    </div>
</div>
  )
}

export default Navbar