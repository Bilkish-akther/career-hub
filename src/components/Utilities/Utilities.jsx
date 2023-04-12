// use local storage to manage cart data
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const successToast = (props) =>
    toast.success(props, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorToast = (props) =>
    toast.error(props, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
const addToDb = id => {
    let jobCart = getJobCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        successToast('Job Applied Successful')
        jobCart[id] = 1;
    }
    else {
        errorToast('Job Already Applied');
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getJobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}

const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getJobCart,
    deleteJobCart
}