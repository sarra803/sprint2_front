import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Observable, of } from 'rxjs';
import { Institut } from '../model/institut.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 // apiURL: string = 'http://localhost:8080/api';

  etudiants : Etudiant[]; //un tableau de Produit
  instituts :Institut[];
  institut =new Institut();
  etudiant = new Etudiant();
  etudiantsRecherche:Etudiant[];
  constructor() {
    this.instituts = [ {idIns : 1, nom : "ISET", capacite:200},
    {idIns : 2, nom : "FSEG", capacite:300}
  ];

    this.etudiants = [
      { idEtudiant : 1,  nomEtudiant : "sassi", prenomEtudiant : "sarra", CIN : "09893557",institut : {idIns : 1, nom : "ISET", capacite:200}},
      { idEtudiant : 2,  nomEtudiant : "sassi", prenomEtudiant : "saif", CIN : "09857458",institut : {idIns : 2, nom : "FSEG" ,capacite:300}},
      { idEtudiant : 3,  nomEtudiant :"sassi", prenomEtudiant :"salim", CIN : "098654772",institut : {idIns : 1, nom : "ISET",capacite:200}},
      { idEtudiant : 4,  nomEtudiant :"sassi", prenomEtudiant :"mohamed", CIN : "08534782",institut : {idIns : 1, nom : "ISET",capacite:500}},
      { idEtudiant : 5,  nomEtudiant :"dejmaa", prenomEtudiant :"soumaya", CIN : "075834697",institut : {idIns : 2, nom : "FSEG",capacite:380}}
    ];
   }

    listeEtudiants():Etudiant[] {
      return this.etudiants;
    }
    listeInstituts():Institut[] {
      return this.instituts;
      }

    ajouterEtudiant( prod: Etudiant){
      this.etudiants.push(prod);
    }

    supprimerEtudiant( prod: Etudiant){
     //supprimer le produit prod du tableau produits 
      const index = this.etudiants.indexOf(prod, 0);
      if (index > -1) {
        this.etudiants.splice(index, 1);
      }

      //ou Bien
      /*  this.produits.forEach((cur, index) => {
         if(prod.idProduit === cur.idProduit) {
               this.produits.splice(index, 1);  
            }
      }); */

    }

    consulterEtudiant(id:number): Etudiant{    
     this.etudiant =  this.etudiants.find(p => p.idEtudiant == id);
       return this.etudiant;
    }
    consulterInstitus(id:number): Institut{ 
      this.institut = this.instituts.find(cat => cat.idIns == id);
      return this.institut;
      }

   
    trierEtudiants(){
      this.etudiants = this.etudiants.sort((n1,n2) => {
        if (n1.idEtudiant > n2.idEtudiant) {
            return 1;
        }
    
        if (n1.idEtudiant < n2.idEtudiant) {
            return -1;
        }
    
        return 0;
    });
    }
    rechercherParInstitut(idIns: number): Etudiant[]{
      this.etudiantsRecherche = [];
      this.etudiants.forEach((cur, index) => {
      if(idIns == cur.institut.idIns) {
      console.log("cur "+cur);
      this.etudiantsRecherche.push(cur);
      }
      });
        return  this.etudiantsRecherche;
      }
    
    updateEtudiant(p:Etudiant)
    {
     // console.log(p);
      this.supprimerEtudiant(p);
      this.ajouterEtudiant(p);
      this.trierEtudiants();
    }

   

}
