// export default function FilmModal({ active, setActive, filmData }) {
//   return (
//     <div
//       className={active ? "modal active" : "modal"}
//       onClick={() => setActive(false)}
//     >
//       <div
//         className={active ? "modal__content active" : "modal__content"}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {filmData.map((data) => (
//           <>
//             <div className="modal__header-container">
//               <h2 className="modal__header">{data.rating.kp.toFixed(1)}</h2>
//               <p className="modal__name">{data.name}</p>
//             </div>
//             <div className="modal__info-container">
//               <div className="modal__description-container">
//                 <p className="modal__description">{data.description}</p>
//                 <div className="modal__main-info">
//                   <ul className="modal__list">
//                     <li className="modal__item">
//                       <span>Длительность: {data.movieLength} </span>
//                     </li>
//                     <li className="modal__item">
//                       <span>Дата выхода: {data.releaseYears ? data.releaseYears : year}</span>
//                     </li>
//                     <li className="modal__item">
//                       <span>Жанр: {data.genres}</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <img src="" alt="" />
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }
