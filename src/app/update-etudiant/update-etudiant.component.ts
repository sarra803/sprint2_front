import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../model/etudiant.model';
import { Institut } from '../model/institut.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: []
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant  = new Etudiant();
  instituts :Institut[];
  updatedInstitut: Institut;
 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private etudiantService: EtudiantService) { 
               
              }

  ngOnInit() {
 
  // console.log(this.route.snapshot.params.id);
   this.instituts = this.etudiantService.listeInstituts();
   this.currentEtudiant = this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id);
   console.log(this.currentEtudiant);     
  }

  updateEtudiant()
  { //console.log(this.currentProduit);
    this.updatedInstitut = 
    this.etudiantService.consulterInstitus(this.currentEtudiant.institut.idIns);
    this.currentEtudiant.institut = this.updatedInstitut; 
    this.etudiantService.updateEtudiant(this.currentEtudiant);
    this.router.navigate(['etudiants']);
   }

}
