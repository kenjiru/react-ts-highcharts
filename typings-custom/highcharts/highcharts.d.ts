// The official highcharts.d.ts doesn't define the highcharts module
// So we just created a type definition file that defines it
declare module "highcharts" {
    export = Highcharts;
}