<template>
    <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <h1 style="position: fixed; z-index: 1; width: 100%; color: #1890ff; font-size: 36px;">
                Vue-cli-graphql
            </h1>
        </a-layout-header>

        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <div :style="{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 156px)' }">
                <div style=" display: flex; gap: 18px; margin-bottom: 40px; ">
                    <div style="display: flex;gap: 10px;
                        flex-wrap: wrap;align-items: center;height: max-content;justify-content: center;">
                        <a-button
                            type="primary"
                            style=" width: 100%; "
                            @click="loadDataSecond"
                        >
                            loadData
                        </a-button>
                        <a-checkbox v-model:checked="checked">
                            lastName
                        </a-checkbox>
                        <a-checkbox v-model:checked="id">
                            Id Show
                        </a-checkbox>
                        <a-checkbox v-model:checked="sessionId">
                            Name my Session?
                        </a-checkbox>
                        <a-checkbox
                            v-if="sessionId"
                            v-model:checked="camp"
                        >
                            Show camp?
                        </a-checkbox>
                        <a-checkbox v-model:checked="cache">
                            Cache on
                        </a-checkbox>
                    </div>

                    <div class="form">
                        <input
                            v-model="text"
                            placeholder="Id"
                        >
                        <input
                            v-model="name"
                            placeholder="Name"
                        >
                        <input
                            v-model="secondName"
                            placeholder="lastName"
                        >

                        <a-button @click="queryUsers()">
                            Edit
                        </a-button>
                    </div>
                </div>

                <ul>
                    <li
                        v-for="child, index in users?.data?.childrens"
                        :key="index"
                    >
                        <CardChild :msg="child.firstName">
                            <img
                                :src="avatar(index)"
                                style=" width: 65px; "
                            >
                            <div style=" min-width: 285px; ">
                                <p class="name">
                                    {{ child.firstName }}
                                    <span v-if="child.lastName"> {{ child.lastName }}</span>
                                </p>
                                <span
                                    v-if="child._id"
                                    class="id-class"
                                > Id: <span> {{ child._id }}</span> </span>
                            </div>
                            <span
                                v-if="child?.sessions"
                                class="sessionsClass"
                            >
                                Sesions Name:
                                <ul>
                                    <li
                                        v-for="(sesion, sesionIndex) in child?.sessions"
                                        :key="sesionIndex"
                                    >
                                        <b>{{ index + 1 }}</b> - {{ sesion.name }}
                                        <span v-if="sesion?.camp"><br> Camp: {{ sesion?.camp?.name }} </span>
                                    </li>
                                </ul>
                            </span>
                            <a-button
                                v-if="child._id"
                                @click="editClick(child._id, child.firstName, child.lastName )"
                            >
                                Edit
                            </a-button>
                        </CardChild>
                    </li>
                </ul>
            </div>
        </a-layout-content>

        <a-layout-footer :style="{ textAlign: 'center' }">
            footer
        </a-layout-footer>
    </a-layout>
</template>

<script>
import gql from 'graphql-tag';
import { ref } from 'vue';
import { AvatarGenerator } from 'random-avatar-generator';
import { GET_ALL_USERS_QUERY } from './graphql/queries/userQueries';
import { EDIT_USER_MUTATION } from './graphql/queries/editMutation';
import CardChild from './components/CardChild.vue';
import { seedApi } from './helper/seed';

export default {
    name: 'App',
    components: {
        CardChild,
    },
    setup() {
        return {
            checked: ref(false),
            id: ref(false),
            sessionId: ref(false),
            cache: ref(false),
            camp: ref(false),
        };
    },
    data() {
        return {
            users: [],
            text: '',
            name: '',
            secondName: '',
        };
    },
    watch: {
        sessionId(show) {
            if (!show) this.camp = false;
        },
    },
    async mounted() {
        if (!localStorage.getItem('seed')) seedApi();
        this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY });
    },
    methods: {
        editClick(text, name, secondName) {
            this.text = text;
            this.name = name;
            this.secondName = secondName;
        },
        avatar(index) {
            const generator = new AvatarGenerator();
            return generator.generateRandomAvatar({
                skinColor: 'Pale',
                mouthType: `${index % 2 ? 'Grimace' : 'Eating'}`,
                topType: `${index % 2 ? 'LongHairCurvy' : 'LongHairFroBand'}`,
            });
        },
        async queryUsers() {
            await this.$apollo.mutate({
                mutation: EDIT_USER_MUTATION,
                variables: {
                    input: {
                        _id: this.text,
                        firstName: this.name,
                        lastName: this.secondName,
                    },
                },
            });
            this.loadDataSecond();
        },
        async loadDataSecond() {
            this.users = await this.$apollo.query({
                query: gql`
                    query Children($input: ListChildrenInput) {
                        childrens(input: $input) {
                            ${!this.id ? '' : '_id'}
                            firstName
                            ${!this.checked ? '' : 'lastName'}
                            ${!this.sessionId ? '' : 'sessions {'}
                            ${!this.sessionId ? '' : 'name'}
                            ${!this.sessionId ? '' : '_id'}
                                ${!this.camp ? '' : 'camp {'}
                                    ${!this.camp ? '' : '_id'}
                                    ${!this.camp ? '' : 'name'}
                                    ${!this.camp ? '' : 'address'}
                                ${!this.camp ? '' : '}'}
                            ${!this.sessionId ? '' : '}'}
                        }
                        }
                    `,
                fetchPolicy: !this.cache ? 'no-cache' : undefined,
            });
        },
    },
};
</script>

<style>
ul, li {
    list-style-type: none;
    padding: 0;
}

.name {
    font-family: cursive;
    font-size: 24px;
    margin-bottom: 8px;
    min-width: 160px;
    text-align: left;
}

.id-class {
    font-family: cursive;
    font-style: italic;
    font-weight: 200;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 50%;
}

.sessionsClass {
    align-items: flex-start;
    border: 2px solid #1890ff;
    display: flex;
    flex-direction: column;
    font-family: monospace;
    padding: 3px 10px;
}

</style>
