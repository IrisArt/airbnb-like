import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type onChangeFn = (value: string) => void

@Component({
  selector: 'app-color-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ],
  template: `
    <div class="color-picker-container">
      <label class="block text-sm font-medium text-gray-700 mb-3"></label>
      
      <div class="grid grid-cols-6 gap-2">
        @for (color of colors; track color.value) {
          <button
          type="button"
            class="color-option w-10 h-10 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            [class]="color.class"
            [class.selected]="value() === color.value"
            [class.border-gray-300]="value() !== color.value"
            [class.border-red-600]="value() === color.value"
            (click)="selectColor(color.value)"
          >
          @if (value() === color.value) {
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            }
        </button>
        }
      </div>
    
    </div>
  `,
  styles: [`
    .color-option {
      @apply relative flex items-center justify-center;
    }

    .color-option:hover:not(:disabled) {
      @apply transform scale-105;
    }

    .color-option:disabled {
      @apply opacity-50 cursor-not-allowed;
    }
  `]
})
export class ColorPickerComponent implements ControlValueAccessor {
  private onChange: onChangeFn = () => {}
  private onTouched = () => {}
  value = signal('')

  colors = [
    { value: 'red', class: 'bg-red-500', name: 'Rouge' },
    { value: 'blue', class: 'bg-blue-500', name: 'Bleu' },
    { value: 'green', class: 'bg-green-500', name: 'Vert' },
    { value: 'yellow', class: 'bg-yellow-500', name: 'Jaune' },
    { value: 'purple', class: 'bg-purple-500', name: 'Violet' },
    { value: 'pink', class: 'bg-pink-500', name: 'Rose' },
    { value: 'indigo', class: 'bg-indigo-500', name: 'Indigo' },
    { value: 'gray', class: 'bg-gray-500', name: 'Gris' },
    { value: 'orange', class: 'bg-orange-500', name: 'Orange' },
    { value: 'teal', class: 'bg-teal-500', name: 'Teal' },
    { value: 'cyan', class: 'bg-cyan-500', name: 'Cyan' },
    { value: 'lime', class: 'bg-lime-500', name: 'Lime' }
  ];

  writeValue(value: string) {
    this.value.set(value)
  }

  selectColor(color: string) {
    this.writeValue(color)
    this.onChange(color)
    this.onTouched()
  }

  registerOnChange(fn: onChangeFn) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }
}
