import React from 'react';
import {readFileSync} from 'fs';

import {
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlImage,
    MjmlStyle,
    MjmlText,
    MjmlWrapper,
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();

export const generate = () => {
    const userEmail = '{{ user.email }}';
    const url = '{{ url }}';
    return (
        <Mjml>
            <MjmlHead>
                <MjmlTitle>Please verify your email</MjmlTitle>
                <MjmlPreview>Please verify your email...</MjmlPreview>
                <MjmlStyle>{css}</MjmlStyle>
            </MjmlHead>
            <MjmlBody backgroundColor="#f5f5f5">
                <MjmlWrapper borderRadius="5px" padding="0" backgroundColor="white">
                    <MjmlSection padding="5px" borderRadius="5px 5px 0 0" backgroundColor="#003961">
                        <MjmlColumn>
                            <MjmlImage
                                width="100px"
                                src="https://static.tempo.io/one-frontend/static/images/TempoLogoLight.png"
                            />
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlImage
                                width="217px"
                                src="https://static.tempo.io/one-frontend/static/images/Welcome.png"
                            />
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlText align="center">
                                <strong>Verify your email to finish signing up</strong>
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlText padding="12px 48px" align="center">
                                Thank you for choosing Tempo One. Please confirm that{' '}
                                <strong>{userEmail}</strong> is your e-mail address by clicking on
                                the verify button below within 48 hours.
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlButton
                                backgroundColor="#003961"
                                href={url}
                                borderRadius="24px"
                                width="141px"
                            >
                                Confirm
                            </MjmlButton>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlText fontSize="12px" align="center">
                                Need Help?
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection padding="0">
                        <MjmlColumn>
                            <MjmlText align="center">
                                <a href="https://www.tempo.io/documentation">Help Center</a> |{' '}
                                <a href="mailto: support@tempo.io">Support@tempo.io</a>
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                </MjmlWrapper>
            </MjmlBody>
        </Mjml>
    );
};
