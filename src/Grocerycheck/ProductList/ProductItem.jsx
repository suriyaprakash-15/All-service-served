// import React from "react";
// import { Link } from "react-router-dom";
// import product1 from '../images/category-baby-care.jpg'
// import product2 from '../images/category-atta-rice-dal.jpg'
// import product3 from '../images/category-bakery-biscuits.jpg'
// import product4 from '../images/category-chicken-meat-fish.jpg'
// import product5 from '../images/category-cleaning-essentials.jpg'
// import product6 from '../images/category-dairy-bread-eggs.jpg'
// import product7 from '../images/category-instant-food.jpg'
// import product8 from '../images/category-pet-care.jpg'
// import product9 from '../images/category-snack-munchies.jpg'
// import product10 from '../images/category-tea-coffee-drinks.jpg'
// import Swal from 'sweetalert2';

// const ProductItem = () => {


//   const handleAddClick = () => {
//     Swal.fire({
//       icon: 'success',
//       title: 'Added to Cart',
//       text: "Product has been added to your cart!",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };
//   return (
//     <div>
//       {/* Popular Products Start*/}
//       <section className="my-lg-14 my-8">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 mb-6">
//             <div className="section-head text-center mt-8" >
//               <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
//               <div className="wt-separator bg-primarys">
//               </div>
//               <div className="wt-separator2 bg-primarys">
//               </div>
//               {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
//             </div>
//             </div>
//           </div>
//           <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative ">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Sale</span>
//                     </div>
//                     <Link href="#!">
//                       {" "}
//                       <img
//                         src={product1}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid "
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Haldiram's Sev Bhujia
//                     </Link>
//                   </h2>
//                   <div>
//                     <small className="text-warning">
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5(149)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$18</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $24
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-success">14%</span>
//                     </div>
//                     <Link href="#!">
//                       <img
//                         src={product2}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Bakery &amp; Biscuits</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       NutriChoice Digestive{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (25)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$24</span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product3}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Bakery &amp; Biscuits</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Cadbury 5 Star Chocolate
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                     </small>{" "}
//                     <span className="text-muted small">5 (469)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$32</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $35
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product4}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Hot</span>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Onion Flavour Potato
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                       <i className="bi bi-star" />
//                     </small>{" "}
//                     <span className="text-muted small">3.5 (456)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$3</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $5
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product5}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Instant Food</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Salted Instant Popcorn{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (39)</span>
//                   </div>
//                   <div className="d-flex justify-content-between mt-4">
//                     <div>
//                       <span className="text-dark">$13</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $18
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative ">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Sale</span>
//                     </div>
//                     <Link href="#!">
//                       {" "}
//                       <img
//                         src={product6}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Blueberry Greek Yogurt
//                     </Link>
//                   </h2>
//                   <div>
//                     <small className="text-warning">
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (189)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$18</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $24
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product7}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Britannia Cheese Slices
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                     </small>{" "}
//                     <span className="text-muted small">5 (345)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$24</span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product8}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Instant Food</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Kellogg's Original Cereals
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4 (90)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$32</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $35
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product9}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Slurrp Millet Chocolate{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (67)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$3</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $5
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product10}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Amul Butter - 500 g
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                       <i className="bi bi-star" />
//                     </small>{" "}
//                     <span className="text-muted small">3.5 (89)</span>
//                   </div>
//                   <div className="d-flex justify-content-between mt-4">
//                     <div>
//                       <span className="text-dark">$13</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $18
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Popular Products End*/}
//     </div>
//   );
// };

// export default ProductItem;




import React from "react";
import { Link } from "react-router-dom";
import product1 from '../images/category-baby-care.jpg';
import product2 from '../images/category-atta-rice-dal.jpg';
import product3 from '../images/category-bakery-biscuits.jpg';
import product4 from '../images/category-chicken-meat-fish.jpg';
import product5 from '../images/category-cleaning-essentials.jpg';
import product6 from '../images/category-dairy-bread-eggs.jpg';
import product7 from '../images/category-instant-food.jpg';
import product8 from '../images/category-pet-care.jpg';
import product9 from '../images/category-snack-munchies.jpg';
import product10 from '../images/category-tea-coffee-drinks.jpg';
import Swal from 'sweetalert2';

const ProductItem = () => {
  const handleAddClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: "Product has been added to your cart!",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  const products = [
    { id: 1, image: product1, category: "Snack & Munchies", name: "Haldiram's Sev Bhujia", price: 18, oldPrice: 24, rating: 4.5 },
    { id: 2, image: product2, category: "Bakery & Biscuits", name: "NutriChoice Digestive", price: 24, oldPrice: null, rating: 4.5 },
    { id: 3, image: product3, category: "Bakery & Biscuits", name: "Cadbury 5 Star Chocolate", price: 32, oldPrice: 35, rating: 5 },
    { id: 4, image: product4, category: "Snack & Munchies", name: "Onion Flavour Potato", price: 3, oldPrice: 5, rating: 3.5 },
    { id: 5, image: product5, category: "Instant Food", name: "Salted Instant Popcorn", price: 13, oldPrice: 18, rating: 4.5 },
    { id: 6, image: product6, category: "Dairy, Bread & Eggs", name: "Blueberry Greek Yogurt", price: 18, oldPrice: 24, rating: 4.5 },
    { id: 7, image: product7, category: "Dairy, Bread & Eggs", name: "Britannia Cheese Slices", price: 24, oldPrice: null, rating: 5 },
    { id: 8, image: product8, category: "Instant Food", name: "Kellogg's Original Cereals", price: 32, oldPrice: 35, rating: 4 },
    { id: 9, image: product9, category: "Snack & Munchies", name: "Slurrp Millet Chocolate", price: 3, oldPrice: 5, rating: 4.5 },
    { id: 10, image: product10, category: "Dairy, Bread & Eggs", name: "Amul Butter - 500 g", price: 13, oldPrice: 18, rating: 3.5 }
  ];

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <>
        {[...Array(full)].map((_, i) => <i key={`f-${i}`} className="bi bi-star-fill" />)}
        {half && <i className="bi bi-star-half" />}
        {[...Array(empty)].map((_, i) => <i key={`e-${i}`} className="bi bi-star" />)}
      </>
    );
  };

  return (
    <div>
      {/* Popular Products Start */}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
                <div className="wt-separator bg-primarys" />
                <div className="wt-separator2 bg-primarys" />
              </div>
            </div>
          </div>
          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {products.map((product, idx) => (
              <div key={product.id} className="col fade-zoom">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <div className="position-absolute top-0 start-0">
                        <span className="badge bg-danger">{idx % 2 === 0 ? "Sale" : "Hot"}</span>
                      </div>
                      <Link to="#">
                        <img src={product.image} alt={product.name} className="mb-3 img-fluid" />
                      </Link>
                      <div className="card-product-action">
                        <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                          <i className="bi bi-eye" title="Quick View" />
                        </a>
                        <a href="#!" className="btn-action" title="Wishlist">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="#!" className="btn-action" title="Compare">
                          <i className="bi bi-arrow-left-right" />
                        </a>
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <span className="text-decoration-none text-muted"><small>{product.category}</small></span>
                    </div>
                    <h2 className="fs-6">
                      <Link to="#" className="text-inherit text-decoration-none">
                        {product.name}
                      </Link>
                    </h2>
                    <div className="text-warning">
                      <small>{renderStars(product.rating)}</small>{" "}
                      <span className="text-muted small">{product.rating} rating</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">${product.price}</span>{" "}
                        {product.oldPrice && (
                          <span className="text-decoration-line-through text-muted">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>
                      <div>
                        <button className="btn btn-primary btn-sm" onClick={handleAddClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                            className="feather feather-plus">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                          </svg>{" "}
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Popular Products End */}
    </div>
  );
};

export default ProductItem;
