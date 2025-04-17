import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '@models';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, LinkIconComponent],
  template: `
    <article
      class="group/item flex flex-col rounded-lg border-neutral-800 py-3 transition-all hover:scale-[102%] md:flex-row md:items-center md:gap-6"
    >
      <div
        class="w-32 shrink-0 font-medium text-neutral-400 transition-all group-hover/item:text-cyan-500 md:text-right"
      >
        {{ experience.date || '—' }}
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="text-2xl font-semibold">{{ experience.title }}</h3>
        <p class="text-sm font-medium text-neutral-300">
          {{ experience.company }} <span *ngIf="experience.type">· {{ experience.type }}</span>
        </p>
        <p class="text-sm text-neutral-400">
          {{ experience.description }}
        </p>
        <ul class="mt-1 flex flex-wrap gap-2 text-xs text-cyan-400">
          <li *ngFor="let tech of experience.techStack">#{{ tech }}</li>
        </ul>
      </div>
    </article>
  `,
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Experience;
}
