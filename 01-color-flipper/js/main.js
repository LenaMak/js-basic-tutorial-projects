class NavBar extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `
    <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li>
            <a href="index.html">simple</a>
          </li>
           <li>
          <a href="hex.html">hex</a>
                    </li>
        </ul>
      </div>
    </nav>
  `
 }
}

customElements.define('my-navbar', NavBar);