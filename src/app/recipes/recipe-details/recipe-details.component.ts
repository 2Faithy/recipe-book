import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe = {
    name: '',
    category: '',
    description: '',
    ingredients: [] as string[],
    steps: [] as string[],
    imageUrl: ''
  };

  constructor() {}

  ngOnInit(): void {
    // Mock data for testing
    this.recipe = {
      name: 'Pancakes',
      category: 'Breakfast',
      description: 'Fluffy and delicious pancakes.',
      ingredients: ['Flour', 'Milk', 'Eggs'],
      steps: ['Mix ingredients', 'Cook on griddle'],
      imageUrl: 'https://storage.googleapis.com/a1aa/image/WJEDRCdKeG2UGC3LlNifNQl6jDMJo8bP9cLocGvaGP5m8A2TA.jpg'
    };
  }
  
   // Add methods for sharing and liking the recipe
   shareRecipe() {
    alert('Recipe shared!');
  }

  likeRecipe() {
    alert('Recipe liked!');
  }
}
