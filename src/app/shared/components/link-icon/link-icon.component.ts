import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      [class]="class"
    >
      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free -->
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.6 24.09 0 53.79 0s53.8 24.6 53.8 53.8c-.1 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.4s1.2-269.6 0-297.1h92.4v42.1c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.3-46.2 83.6-46.2 61 0 106.8 39.9 106.8 125.6V448z"
      />
    </svg>

  `,
})
export class LinkIconComponent {
  @Input() class = '';
}
