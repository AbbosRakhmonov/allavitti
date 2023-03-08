import React, {useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
function MoreQuestion() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="question-box">
      <div className="question-container">
        <h3>Eng ko’p berilgan savollar?</h3>
        <ul>
          <li>
            <span>1.</span><Link to='/' className="question-link">Витилиго кимларда куп учрайди</Link>
          </li>
          <li>
            <span>2.</span><Link to='/' className="question-link">Vitiligo odamdan odamga yuqadimi?</Link>
          </li>
          <li>
            <span>3.</span><Link to='/' className="question-link">Vitiligo nasldan-naslga o’tadimi?</Link>
          </li>
          <li>
            <span>4.</span><Link to='/' className="question-link">Витилиго асоратлари</Link>
          </li>
          <li>
            <span>5.</span><Link to='/' className="question-link">Узоқ йиллардан бери Витилито тери касаллигим бор нима
            қилсам бўлади?</Link>
          </li>
          <li>
            <span>6.</span><Link to='/' className="question-link">Vitiligo belgilari</Link>
          </li>
          <li>
            <span>7.</span><Link to='/' className="question-link">“ALLAVITTI” кремни фойдаланишдан олдин қуйидаги
            маслахатларга амал қилишингизни сўраймиз.</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreQuestion;
