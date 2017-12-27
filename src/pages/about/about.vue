<template>
    <div class="hello">
        <div>
            <div>
                <small>Flat</small>
                <md-button>Default</md-button>
                <md-button :md-ripple="false">Ripple Off</md-button>
                <md-button class="md-primary">Primary</md-button>
                <md-button class="md-accent">Accent</md-button>
                <md-button disabled>Disabled</md-button>
            </div>
        
            <div>
                <small>Raised</small>
                <md-button class="md-raised">Default</md-button>
                <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
                <md-button class="md-raised md-primary">Primary</md-button>
                <md-button class="md-raised md-accent">Accent</md-button>
                <md-button class="md-raised" disabled>Disabled</md-button>
            </div>
        
            <div>
                <small>Dense</small>
                <md-button class="md-dense md-primary">Flat</md-button>
                <md-button class="md-dense md-raised md-primary">Raised</md-button>
            </div>
        </div>

        <div>
            <div>
                <small>Regular</small>
                <md-button class="md-fab">
                    <md-icon>menu</md-icon>
                </md-button>
                <md-button class="md-fab md-primary">
                    <md-icon>add</md-icon>
                </md-button>
                <md-button class="md-fab md-plain">
                    <md-icon>edit</md-icon>
                </md-button>
            </div>
        
            <div>
                <small>Mini/Dense</small>
                <md-button class="md-fab md-mini">
                    <md-icon>menu</md-icon>
                </md-button>
                <md-button class="md-fab md-mini md-primary">
                    <md-icon>add</md-icon>
                </md-button>
                <md-button class="md-fab md-mini md-plain">
                    <md-icon>edit</md-icon>
                </md-button>
            </div>
        </div>

        <md-empty-state md-icon="devices_other" md-label="Create your first project" md-description="Creating project, you'll be able to upload your design and collaborate with people.">
            <md-button class="md-primary md-raised">Create first project</md-button>
        </md-empty-state>
        <md-empty-state md-icon="devices_other" md-label="Create your first project" md-description="Creating project, you'll be able to upload your design and collaborate with people.">
            <md-button class="md-primary md-raised">Create first project</md-button>
        </md-empty-state>
    </div>
</template>

<script src="./home.js"></script>
<style lang="scss" scoped src="./home.scss"></style>
