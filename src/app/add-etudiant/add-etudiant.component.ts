import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { Institut } from '../model/institut.model';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
   instituts :Institut[];
  newEtudiant = new Etudiant();
  newidIns: number;
  newInstitut: Institut;
  msg : string;
  constructor(private etudiantService: EtudiantService) { }

  addEtudiant(){
    // console.log(this.newProduit);
    this.newInstitut = this.etudiantService.consulterInstitus(this.newidIns);
    this.newEtudiant.institut = this.newInstitut;
    this.etudiantService.ajouterEtudiant(this.newEtudiant);
    this.msg = "Etudiant "+ this.newEtudiant.nomEtudiant+" ajouté avec succès"
   }

  ngOnInit() {
    this.instituts = this.etudiantService.listeInstituts();

  }


  
}
