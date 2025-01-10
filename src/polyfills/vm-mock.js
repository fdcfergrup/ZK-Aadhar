// Minimal mock for VM functionality needed by asn1.js
export default {
  runInNewContext: (code, context) => {
    const fn = new Function('context', `with(context){return ${code}}`);
    return fn(context);
  }
};
