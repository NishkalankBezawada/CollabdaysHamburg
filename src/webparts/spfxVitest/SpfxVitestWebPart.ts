import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SpfxVitestWebPartStrings';
import SpfxVitest from './components/atoms/SpfxVitest';
import { ISpfxVitestProps } from './components/atoms/ISpfxVitestProps';
import SearchBox from './components/molecules/SearchBox';
import { ISearchBoxProps } from './components/molecules/ISearchBoxProps';
import UserProfileCard from './components/organisms/UserProfileCard';
import { IUserProfileCardProps } from './components/organisms/IUserProfileCardProps';

export interface ISpfxVitestWebPartProps {
  description: string;
}

export default class SpfxVitestWebPart extends BaseClientSideWebPart<ISpfxVitestWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const spfxVitestElement: React.ReactElement<ISpfxVitestProps> = React.createElement(
      SpfxVitest,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    const searchBoxElement: React.ReactElement<ISearchBoxProps> = React.createElement(
      SearchBox,
      {
        placeholder: 'Search...',
        onSearch: (query: string) => { console.log('Search query:', query); }
      }
    );

    const userProfileCardElement: React.ReactElement<IUserProfileCardProps> = React.createElement(
      UserProfileCard,
      {
        displayName: this.context.pageContext.user.displayName,
        email: this.context.pageContext.user.email,
        role: 'Member',
        isOnline: true,
        recentSearches: [],
        onSearch: (query: string) => { console.log('Profile search:', query); }
      }
    );

    const separator: React.ReactElement = React.createElement('hr', { style: { margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' } });

    const element: React.ReactElement = React.createElement(
      React.Fragment,
      null,
      spfxVitestElement,
      separator,
      searchBoxElement,
      React.createElement('hr', { style: { margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' } }),
      userProfileCardElement
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
