import { CurrencyPipe } from "@angular/common";
import { SearchOption } from "./search.model";

export class SearchUtils {
    static toSearchOptions(source: any[], valueProp: string, textProps: string[], separator?: string): SearchOption[] {

        return source.map(x => new SearchOption(this.getValue(x, valueProp), this.getText(x, textProps, separator)))
    }

    private static getText(x: any, textProps: string[], separator?: string): string {
        let res = '';
        let pipe: CurrencyPipe = new CurrencyPipe('pt', 'BRL');

        for (const prop of textProps) {
            let index = textProps.indexOf(prop);

            let propName = prop;
            let propMask = '';

            if (prop.indexOf(':') > -1) {
                propName = prop.split(':')[0];
                propMask = prop.split(':')[1];
            }

            let value = '';

            if (propName.indexOf('.') > -1) {
                value = (x[propName.split('.')[0]])[prop.split('.')[1]];
            }
            else {
                value = x[propName];
            }

            if (propMask == 'C') {
                value = pipe.transform(value) ?? value;
            }

            res += value;

            if (index < textProps.length - 1) {
                res += separator || ' - ';
            }
        }

        return res;
    }

    private static getValue(x: any, valueProp: string): any {
        let result: any | null = null;

        if (valueProp.indexOf('.') > -1)
            result = (x[valueProp.split('.')[0]])[valueProp.split('.')[1]];
        else
            result = x[valueProp];

        return result;
    }
}