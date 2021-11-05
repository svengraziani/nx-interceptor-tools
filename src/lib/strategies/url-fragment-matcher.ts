import {RequestMatchStrategy} from "../interfaces/request-match-strategy";
import {HttpRequest} from "@angular/common/http";
import {RequestMatchSelectorStrategy} from "../interfaces/request-match-selector-strategy";
import {URL_WITH_PARAMS_SELECTOR} from "../selectors/url-with-params-selector";


export class UrlFragmentMatcher implements RequestMatchStrategy {
  public constructor(
    public urlFragments: string[],
    public selector: RequestMatchSelectorStrategy = URL_WITH_PARAMS_SELECTOR) {
  }

  public match(request: HttpRequest<any>): boolean {
    const selector = this.selector(request);
    return Boolean(this.urlFragments.filter(fragment => selector.indexOf(fragment) !== -1).length);
  }

}
