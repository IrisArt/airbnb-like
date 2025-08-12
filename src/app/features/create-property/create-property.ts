import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker';

@Component({
  selector: 'app-create-property',
  imports: [ReactiveFormsModule, ColorPickerComponent],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Créer une propriété</h1>
          <p class="text-gray-600 mt-2">Ajoutez une nouvelle propriété à votre collection</p>
        </div>

        <!-- Create Property Form -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
          <div class="px-8 py-6 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-900">Informations de la propriété</h2>
          </div>

          <form class="p-8 space-y-6" [formGroup]="propertyForm" (ngSubmit)="createProperty()">
            <!-- Title Field -->
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                Titre de la propriété
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input 
                  type="text" 
                  id="title" 
                  formControlName="title"
                  class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                  placeholder="Entrez le titre de la propriété"
                >
              </div>
            </div>

            <!-- Color Picker -->
            <div>
              <app-color-picker
                formControlName="propertyColor">
              </app-color-picker>
            </div>

            <!-- Tags Section -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div class="space-y-3">
                <!-- Tags List -->
                <div formArrayName="tags"  class="space-y-2">
                  @for (tag of tagsArray.controls; track $index) {
                    <div class="flex items-center space-x-2">
                      <div class="relative flex-1">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input 
                          [formControlName]="$index"
                          type="text" 
                          class="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                          placeholder="Entrez un tag"
                        >
                      </div>
                      <button 
                        type="button"
                        class="inline-flex items-center justify-center p-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        (click)="removeTag($index)"
                      >
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  }
                </div>

                <!-- Add Tag Button -->
                <button 
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                  (click)="addTag()"
                >
                  <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                  Ajouter un tag
                </button>
              </div>
            </div>

            <!-- Create Button -->
            <div class="pt-6 border-t border-gray-200">
              <button 
                type="submit"
                class="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Créer la propriété
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class CreateProperty {
  private builder = inject(FormBuilder)
  
  propertyForm = this.builder.group({
    title: '',
    propertyColor: '',
    tags: this.builder.array([])
  })

  get tagsArray() {
    return this.propertyForm.get('tags') as FormArray
  }

  addTag() {
    const tagControl = new FormControl('')
    this.tagsArray.push(tagControl)
  }

  removeTag(index: number) {
    this.tagsArray.removeAt(index)
  }

  createProperty() {
    console.log(this.propertyForm.value)
  }
}
