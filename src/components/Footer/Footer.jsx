import { CFooter, CLink } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@coreui/coreui/dist/css/coreui.min.css'
import "nes.css/css/nes.min.css";
import './Footer.css';

export function Footer() {
  return (
    <div class="nes-container is-centered footer">
      <CFooter>
        <div>
          <span>Facundo Loto</span>
        </div>
        <div>
          <CLink href="https://coreui.io">GitHub</CLink>
        </div>
        <div>
          <CLink href="https://coreui.io">Linkedin</CLink>
        </div>
      </CFooter>
    </div>
  );
};