import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Institut } from '../model/institut.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-recherche-par-institut',
  templateUrl: './recherche-par-institut.component.html',
  styles: [
  ]
})


export class RechercheParInstitutComponent implements OnInit {
  IdInstitut:number;
  etudiants:Etudiant[];
  instituts:Institut[];

  constructor(private etudiantService :EtudiantService) { }

  ngOnInit(): void {
    this.instituts=this.etudiantService.listeInstituts();
    this.etudiants= [];
  }

  onChange() {
    console.log(this.IdInstitut);
    this.etudiants=this.etudiantService.rechercherParInstitut(this.IdInstitut);
    }
}
