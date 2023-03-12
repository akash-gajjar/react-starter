## Using Error Boundary

Error handling is implemented using `ErrorBoundary` component provided from `react-error-boundary`
package, to catch error we simple need to wrap our component and provide `fallbackRender` component
to display error in `production`.

```jsx
<ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
  <Address.Manager
    onDefaultChange={() => {}}
    isAddAddressFormOpen={isAddAddressFormOpen}
    setIsAddAddressFormOpen={setIsAddAddressFormOpen}
  />
</ErrorBoundary>
```

We can reset error state for any component if it uses `react-query` using
`QueryErrorResetBoundary`. For this we wrap our component that uses `react-query`
in its children and call `reset` inside our `ErrorBoundary`.

For this to work we need to set `useErrorBoundary: true` in `react-query` options.

```jsx
<QueryErrorResetBoundary>
  {({ reset }) => (
    <ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
      <Address.Manager
        onDefaultChange={() => {}}
        isAddAddressFormOpen={isAddAddressFormOpen}
        setIsAddAddressFormOpen={setIsAddAddressFormOpen}
      />
    </ErrorBoundary>
  )}
</QueryErrorResetBoundary>
```
