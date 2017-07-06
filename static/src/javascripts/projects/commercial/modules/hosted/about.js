// @flow

import fastdom from 'lib/fastdom-promise';
import $ from 'lib/$';
import crossIcon from 'svgs/icon/cross.svg';
import paidContent from 'svgs/commercial/paid-content.svg';

const template = (): string => `
        <div class="survey-overlay-simple js-survey-overlay u-h" data-link-name="hosted page about overlay" role="dialog" aria-label="about hosted content">
            <div class="survey-container">
                <h3 class="survey-text__header">
                    Advertiser content
                    <div class="survey-close js-survey-close">
                        <button class="site-message__close-btn js-site-message-close" data-link-name="hide about hosted message">
                            <span class="u-h">Close</span>
                            ${crossIcon.markup}
                        </button>
                    </div>
                </h3>
                <div class="survey-icon">
                    ${paidContent.markup}
                </div>
                <div class="survey-text">
                    <p class="survey-text__paragraph">
                        Advertiser content is used to describe advertisement features that are paid for,
                        produced and controlled by the advertiser rather than the publisher.
                    </p>
                    <p class="survey-text__paragraph">
                        They are subject to regulation by the Advertising Standards Authority in the UK,
                        the Federal Trade Commission in the US and the Advertising Standards Bureau in Australia.
                    </p>
                    <p class="survey-text__paragraph">
                        This content is produced by the advertiser and does not involve Guardian News and Media staff.
                    </p>
                </div>
            </div>
        </div>
    `;

const init = () =>
    fastdom
        .write(() => {
            $(document.body).append(template());
        })
        .then(() => {
            const aboutBtn = document.querySelector('.js-hosted-about');
            const closeBtn = document.querySelector('.js-survey-close');
            const overlay = document.querySelector('.js-survey-overlay');
            if (!overlay || !aboutBtn || !closeBtn) return;

            aboutBtn.addEventListener('click', (e: Event): mixed => {
                e.preventDefault();
                fastdom.write(() => overlay.classList.remove('u-h'));
            });
            closeBtn.addEventListener('click', () => {
                fastdom.write(() => overlay.classList.add('u-h'));
            });
        });

export default {
    init,
};
