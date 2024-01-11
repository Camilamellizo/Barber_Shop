<template>
  <div class="h-36">

  </div>
 <nav class="navbar  drop-shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
  <div class="container mx-auto grid grid-cols-5">

       <div class="col-span-1 ml-8">      
          <img src="@/assets/logos2.png" alt="logos" class="">     
    </div>   


    <div class="col-span-3 w-full md:block md:w-auto pt-20 pl-36">
      <ul class="flex mt-4   md:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="text-yellow-500 font-bold text-base  font-serif block py-2 pl-3 pr-4   rounded md:bg-transparent md:text-text-yellow-500  font-serif md:hover:text-white  md:p-0 md:dark:text-white dark:bg-blue-700 font-bold text-base md:dark:bg-transparent" aria-current="page">HOME</a>
        </li>
        <span class="text-yellow-600">·</span>
        <li>
          <a href="#" class="text-yellow-600 font-bold text-base  font-serif block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">UPDO SALON</a>
        </li>
        <span class="text-yellow-600">·</span>
     
        <li>
          <a href="#" class="text-yellow-600 font-bold text-base  font-serif block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BARBER SHOP</a>
        </li>
        <span class="text-yellow-600">·</span>

        <li>
          <a href="#" class="text-yellow-600 font-bold text-base  font-serif block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">OPTENER PRESUPUESTO</a>
        </li>
        
      </ul>
    </div>
    

    <div class="col-span-1 grid place-items-center  pt-6">
      <div class="flex">
      <div>
        <button class="button text-yellow-600 font-bold font-serif ">Reservar</button>
      </div>
      <div class="bg-yellow-600 w-10 h-10 rounded-full ml-8">
       <img src="@/assets/instagram.png" alt="icono Instagram">
      </div>
    </div>

</div>
  </div>
</nav>



</template>

<script>
export default {
  name: 'navBar',
 
}
</script>
<style>
.navbar{
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 110px;
  min-height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.3px; 
  
  background: #0d0e0d;
background: linear-gradient(90deg, rgb(12, 12, 12) 0%, rgb(13, 14, 13) 100%);
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 5px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #dbdbdb;
  transform: translateY(-6px);
}



button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #be7016;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 150px;
    height: 100px;
    opacity: 0;
  }
}
</style>
