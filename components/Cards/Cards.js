
import './Cards.css';
import Button from "../Button/Button";

const Card = (props) => {
      return(
        <div className="CardsContainer cards-container">
        <div className="Card card">
          <img src={props.photo} alt="Portrait" class="CardImage card-image" />
          <div className="CardContent card-content">
            <h2 className="CardTitle card-title">{props.name}</h2>
            <p className="CardDescription card-description">
            {props.description} </p>
            <Button>En savoir plus</Button>
          </div>
        </div>
        </div>
      );
}
export default Card;


// function Cards() {
//     return (
//       <div className="CardsContainer cards-container">
//         <div className="Card card">
//           <img src="https://i.pravatar.cc/300?img=11" alt="Portrait" class="CardImage card-image" />
//           <div className="CardContent card-content">
//             <h2 className="CardTitle card-title">Maxime Faubert</h2>
//             <p className="CardDescription card-description">
//                 Développeur Front-end passionné par les interfaces élégantes et réactives.
//             </p>
//             <button class="CardButton card-button">En savoir plus</button>
//           </div>
//         </div>
//         <div className="Card card">
//           <img src="https://i.pravatar.cc/300?img=10" alt="Portrait" class="CardImage card-image" />
//           <div className="CardContent card-content">
//             <h2 className="CardTitle card-title">Emilie Goudreau</h2>
//             <p className="CardDescription card-description">
//                 Designer créatif avec un œil pour le détail et l'harmonie des couleurs.
//             </p>
//             <button className="CardButton card-button">En savoir plus</button>
//           </div>
//         </div>
//         <div className="Card card">
//           <img src="https://i.pravatar.cc/300?img=32" alt="Portrait" class="CardImage card-image" />
//           <div className="CardContent card-content">
//             <h2 className="CardTitle card-title">Alice Lafond</h2>
//             <p className="CardDescription card-description">
//                 Chef de projet avec une expertise en gestion agile et communication efficace.
//             </p>
//             <button className="CardButton card-button">En savoir plus</button>
//           </div>
//         </div>
//         <div className="Card card">
//           <img src="https://i.pravatar.cc/300?img=7" alt="Portrait" class="CardImage card-image" />
//           <div className="CardContent card-content">
//             <h2 className="CardTitle card-title">Paul Guédry</h2>
//             <p className="CardDescription card-description">
//                 Développeur Full-stack aimant résoudre des problèmes complexes avec du code propre.
//             </p>
//             <button className="CardButton card-button">En savoir plus</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  // export default Cards;
