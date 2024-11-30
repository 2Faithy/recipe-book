import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes = [
    { name: 'Pancakes', category: 'Breakfast', description: 'Fluffy and delicious.' },
    { name: 'Spaghetti', category: 'Dinner', description: 'Classic Italian dish.' }
  ];
}
