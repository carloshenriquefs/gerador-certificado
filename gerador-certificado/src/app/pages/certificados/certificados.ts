import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {}
