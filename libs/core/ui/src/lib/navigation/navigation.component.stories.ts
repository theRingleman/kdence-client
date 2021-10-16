import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'NavigationComponent',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta<NavigationComponent>;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  component: NavigationComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
