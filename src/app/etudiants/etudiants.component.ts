import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { AuthService } from '../services/auth.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
 
  etudiants : Etudiant[]; //un tableau de Produit


  constructor(private etudiantService: EtudiantService,public authService: AuthService) {
    this.etudiants = etudiantService.listeEtudiants();
   }

   supprimerEtudiant(p: Etudiant)
   {
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.etudiantService.supprimerEtudiant(p);
   }

  ngOnInit() {
  }

}
