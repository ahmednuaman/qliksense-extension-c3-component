# QlikSense extension C3 component

## How to use

In your JS
```
import 'qliksense-extension-c3-component'
```

Then in your template where `config` is C3JS's options: http://c3js.org/reference.html
```
<c3-chart class="c3" config="config" />
```

To trigger redraws (if properties change, for example) use `$rootScope.$broadcast('c3ChartRedraw')`
