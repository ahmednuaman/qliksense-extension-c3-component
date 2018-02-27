/* global qvangularGlobal */

import $ from 'jquery'
import * as c3 from 'c3'

import './index.scss'

if (!qvangularGlobal.$injector.has('c3ChartDirective')) {
  qvangularGlobal.directive('c3ChartDirective', ['$rootScope', ($rootScope) => ({
    scope: {
      config: '='
    },
    link: ($scope, $element, $attr) => {
      const resize = () => {
        if (chart) {
          const el = $($element)
          const table = el.next()
          const parent = el.parent()

          chart.resize({
            height: parent.innerHeight() - table.outerHeight(),
            width: parent.innerWidth()
          })
        }
      }

      let chart

      $scope.$watch('config', () => {
        if (chart) {
          chart.destroy()
        }

        chart = c3.generate({
          ...$scope.config,
          bindto: $element[0]
        })

        resize()
      })

      $(window).resize(resize)
      $rootScope.$on('c3ChartRedraw', resize)
      resize()
    }
  })])
}
