import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styles: []
})
export class AnalyticsComponent implements OnInit {

    gapi:any;

  constructor() {
      this.gapi.analytics.ready(function() {

        /**
         * Authorize the user immediately if the user has already granted access.
         * If no access has been created, render an authorize button inside the
         * element with the ID "embed-api-auth-container".
         */
        this.gapi.analytics.auth.authorize({
          container: 'embed-api-auth-container',
          clientid: 'REPLACE WITH YOUR CLIENT ID'
        });


        /**
         * Create a new ViewSelector instance to be rendered inside of an
         * element with the id "view-selector-container".
         */
        let viewSelector = new this.gapi.analytics.ViewSelector({
          container: 'view-selector-container'
        });

        // Render the view selector to the page.
        viewSelector.execute();


        /**
         * Create a new DataChart instance with the given query parameters
         * and Google chart options. It will be rendered inside an element
         * with the id "chart-container".
         */
        let dataChart = new this.gapi.analytics.googleCharts.DataChart({
          query: {
            metrics: 'ga:sessions',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            container: 'chart-container',
            type: 'LINE',
            options: {
              width: '100%'
            }
          }
        });


        /**
         * Render the dataChart on the page whenever a new view is selected.
         */
        viewSelector.on('change', function(ids) {
          dataChart.set({query: {ids: ids}}).execute();
        });

      });
  }

  ngOnInit() {
  }

}
