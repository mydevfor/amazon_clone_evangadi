import React from 'react'

function Header() {
  return (
    <>
      

      <section>
  <div className={classes.header__container}>
    {/* logo section */}
    <a href="#" className={classes.logo__container}>
      <img 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="amazon logo" 
      />
    </a>

    <div className={classes.delivery}>
      <span>
        {/* Assuming SLLocationPin is a component */}
        <SLLocationPin />
      </span>
      <div>
        <p>Deliver to</p>
        <span>Ethiopia</span>
      </div>
    </div>
  </div>

  {/* search section */}
  <div>
    <select name="" id="">
      <option value="">All</option>
    </select>
  </div>
</section>





    </>
  )
}

export default Header
